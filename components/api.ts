export interface CreateWaitListProps {

        // firstname: string;
        // lastname: string;
        // clientType: string;
        // numOfProperties: number;
        service: string;
        email: string;

}

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL


export const createWaitList = async (payload: CreateWaitListProps)=>{
    try{
    const response = await fetch(`${BASE_URL}/prototype/waitlist`, {
        method: 'POST',
        mode: 'cors',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
    })

    if(!response) return 'No response from server'
    const data = await response.json()
    return data
}catch(err){
    console.log('Error', err)
    return 'Unable to add to waitlist'
}
}