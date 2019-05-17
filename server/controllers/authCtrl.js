const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { first_name, last_name, phone, profile_pic_url, email, password } = req.body;
        const db = req.app.get('db');
        const userArr = await db.find_user_by_email([email]) 
        if(userArr[0]) {
            return res.status(200).send({message: 'Email already in use'})
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt)
        let newUserArr = await db.create_user([
            first_name,
            last_name,
            phone,
            profile_pic_url,
            email,
            hash
        ])
        req.session.user =  {
            user_id: newUserArr[0].user_id,
            first_name: newUserArr[0].first_name,
            last_name: newUserArr[0].last_name,
            phone: newUserArr[0].phone,
            profile_pic_url: newUserArr[0].profile_pic_url,
            email: newUserArr[0].email
        } 
        res.status(200).send({
            message: 'logged in',
            userData: req.session.user,
            loggedIn: true
        })
    },
    async login(req, res) {
        const { email, password } = req.body
        const db = req.app.get('db');
        const userArr = await db.find_user_by_email([email])
        if(!userArr[0]) {
            return res.status(200).send({message: 'user not found'})
        }
        const result = bcrypt.compareSync(password, userArr[0].hash)
        if(!result) {
            return res.status(401).send({message: 'Password Incorrect'})
        }
        req.session.user = {
            email: userArr[0].email, 
            user_id: userArr[0].user_id,
            first_name: userArr[0].first_name,
            last_name: userArr[0].last_name,
            phone: userArr[0].phone,
            profile_pic_url: userArr[0].profile_pic_url
        };
        res.status(200).send({
            message: 'Login successful',
            loggedIn: true
        })
    },
    logout(req, res) {
        req.session.destroy(() => res.sendStatus(200)); 
      },
    userData(req, res) {
        if(req.session.user) res.status(200).send(req.session.user)
        else res.status(401).send('Please Login')
    }
}