import React, { useEffect, useState } from 'react'


function Github() {
    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        // Fetch GitHub followers data here
        fetch('https://api.github.com/users/hiteshchoudhary')
            .then(response => response.json())
            .then(data => setFollowers(data.followers))
            .catch(error => console.error('Error fetching GitHub followers:', error));
    }, []);

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Followers: {followers}</div>
    )
}

export default Github