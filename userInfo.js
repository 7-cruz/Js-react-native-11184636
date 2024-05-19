// userInfo.js

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: index + 1 // Auto-incrementing ID starting from 1
        };
    });
}

// Export the function for use in other files
module.exports = { createUserProfiles };
