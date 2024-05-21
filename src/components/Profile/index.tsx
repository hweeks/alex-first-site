import React from "react"
import image from "./IMG_2747.png"
let i = 0

const user = {
    name: 'Alex Sorichetti',
    imageUrl: image,
    imageSize: 160,
};
const qualifications = [
    { title: 'CSS', id: 1 },
    { title: 'HTML', id: 2 },
    { title: 'React', id: 3 },
    { title: 'JSX', id: 4 },
    { title: 'P5.js', id: 5 },
    { title: 'TypeScript', id: 6 },
]

export function Profile() {
    for(i=0; i < 6; i++){
    return(
        <div>
         <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: 190,
                }} />
                <h2>{'Qualifications'}</h2>
                <li
                key={qualifications[i].id}
                >
                {qualifications[i].title}
            </li>
            
                <li>{qualifications[i+1].title}</li>
              </div>  
    )
    }
}
