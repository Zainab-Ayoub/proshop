import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Ahmad Zafar',
        email: 'ahmadzafar@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Hassan Zafar',
        email: 'hassanzafar@email.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    }
]

export default users;