const current_users: string[] = ["Kamran", "Ali", "Burhan", "Asad", "Asif", "Ahmed"];

const new_users: string[] = ["asif", "kamRan", "phull", "Aisha", "ali"];




function checkUserNames(current_users: string[], new_users: string[]): void 
{

    const lowercasedCurrentUsers = current_users.map(user => user.toLowerCase());

    for (const newUser of new_users) {
        const lowercasedNewUser = newUser.toLowerCase();
        if (lowercasedCurrentUsers.includes(lowercasedNewUser)) {
            console.log(`Username "${newUser}" is already taken. Please enter a new username.`);
        } else {
            console.log(`Username "${newUser}" is available.`);
        }
    }
}



checkUserNames(current_users, new_users);