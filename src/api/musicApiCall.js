import axios from "axios"
const musicApiCall = () => async (dispatch) =>{
    try {
        const response = await axios.get('/api/music')
        console.log(response)
    }
    catch(err){
        console.error("Api calling is failed due to : "+err)
    }
}
export default musicApiCall;