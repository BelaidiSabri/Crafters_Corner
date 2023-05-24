import axios from "axios"

const fetchUserProfile = async (username)=>{

    const token = localStorage.getItem('token')
    const config ={
            headers: {
                Authorization: token
            }
    }
    try {
        const response = await axios.get( `http://localhost:7000/api/profile/artisan/${username}`,config)
        return response.data
        
    } catch (error) {
        console.log(error);
        throw error
        
    }

}

export default fetchUserProfile