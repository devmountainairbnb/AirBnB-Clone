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
        const result = bcrypt.compareSync(password, userArr[0].acc_hash)
        if(!result) {
            return res.status(401).send({message: 'Password Incorrect'})
        }
        req.session.user = {email: userArr[0].acc_email, id: userArr[0].acc_id};
        res.status(200).send({
            message: 'Login successful',
            loggedIn: true
        })
    },
}