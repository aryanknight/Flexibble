export const getUserQuery=`
    query GetUser($email:String!){
        user(by:{email:$email}){
            id 
            name
            email
            avatarUrl
            description
            githubUrl
            linkedInUrl 
        }
    }
`

export const createUserMutation=`
    mutation CreateUser($input:UserCreateInput){
        userCreate(input:$input){
            id 
            name
            email
            avatarUrl
            description
            githubUrl
            linkedInUrl 
        }
    }
`