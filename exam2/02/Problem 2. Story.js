class Story {
    constructor(title, creator) {
        this.title = title
        this.creator = creator
        this._coments = []
        this._likes = []
    }
    get likes() {
        if (this._likes.length < 1) {
            return `${this.title} has 0 likes`
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }
    }
    like(username) {
        if (this._likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`)
        } else if (username === this.creator) {
            throw new Error(`You can't like your own story!`)
        } else {
            this._likes.push(username)
            return `${username} liked ${this.title}!`
        }
    }
    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error(`You can't dislike this story!`)
        } else {
            let indexOfusername = this._likes.indexOf(username)
            this._likes.splice(indexOfusername, 1)
            return `${username} disliked ${this.title}`
        }
    }
    comment(username, content, id) {
        if (id) {
            let currentId = id
            let isHaveId = this._coments.find(({ id, username, content, replies }) => id === currentId)
            if (!isHaveId) {
                this._coments.push({ id: this._coments.length + 1, username, content, replies: [] })
                return `${username} commented on ${this.title}`
            } if (isHaveId) {
                let index = this._coments.findIndex(obj => obj.id === currentId)
                let subIndex = this._coments[index].replies.length + 1

                this._coments[index].replies.push({ id: currentId + '.' + subIndex, username, content })
                return `You replied successfully`

            }
        } else {
            this._coments.push({ id: this._coments.length + 1, username, content, replies: [] })
            return `${username} commented on ${this.title}`
        }

    }
    toString(sortingType) {
        if (this._coments.length <= 0) {
            return `Comments:`
        } else {
            let finalArray = []
            finalArray.push(`Title: ${this.title}`,
                `Creator: ${this.creator}`,
                `Likes: ${this._likes.length}`,
                'Comments:')

            if (sortingType === 'asc') {
                let sorted = this._coments.sort((a, b) => a.id - b.id);
                sorted.forEach(({ id, username, content, replies }) => {
                    replies.sort((a, b) => a.id - b.id);
                    finalArray.push(`-- ${id}. ${username}: ${content}`)
                })
                sorted.forEach(({ replies }) => {
                    replies.forEach(({ id, username, content }) => {
                        finalArray.push(`--- ${id}. ${username}: ${content}`)
                    })
                })
                return finalArray.join('\n')


            } else if (sortingType === 'desc') {
                let sorted = this._coments.sort((a, b) => b.id - a.id);
                sorted.forEach(({ id, username, content, replies }) => {
                    replies.sort((a, b) => (b.id) - (a.id));
                    finalArray.push(`-- ${id}. ${username}: ${content}`)
                })
                sorted.forEach(({ replies }) => {
                    replies.forEach(({ id, username, content }) => {
                        finalArray.push(`--- ${id}. ${username}: ${content}`)
                    })
                })
                return finalArray.join('\n')

            } else if (sortingType === 'username') {
                let sorted = this._coments.sort((a, b) => (a.username).localeCompare(b.username));
                sorted.forEach(({ id, username, content, replies }) => {
                    replies.sort((a, b) => (a.username).localeCompare(b.username));
                    finalArray.push(`--- ${id}. ${username}: ${content}`)
                })
                sorted.forEach(({ replies }) => {
                    replies.forEach(({ id, username, content }) => {
                        finalArray.push(`--- ${id}. ${username}: ${content}`)
                    })
                })
                return finalArray.join('\n')

            }
        }
    }


}
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));