import React from "react"
import { useState } from "react"
import image from "../assets/IMG_2747.png"


const user = {
    name: ' Alex Sorichetti',
    imageUrl: image,
    imageSize: 155,
};

const qualifications = [
    { title: 'CSS', id: 1 },
    { title: 'HTML', id: 2 },
    { title: 'React', id: 3 },
    { title: 'JSX', id: 4 },
    { title: 'P5.js', id: 5 },
    { title: 'TypeScript', id: 6 },
]

export function Form(){
    const [value, setValue] = useState('');
   
    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setValue(event.currentTarget.value);
    }
    let myResponse = <></>
    if (value.toLowerCase()==="yes"){
       myResponse= <div>Thank you, please email me with your offer; alex@sorichetti.org</div>
    }
    else if (value.toLowerCase()==="no"){
        myResponse= <div>Everyone is a Critic, but I'll Keep Improving</div>
    }
    else{
       myResponse= <div>Learning is Constantly Happening</div>
    }

    return(
        <>
        {myResponse}<p/>
        <input value={value} onChange={handleChange} /><p/>
         Would You Hire Me?: {value}<p/>
        </>
        
    );
}

interface MyButtonProps{
    title: string;
    disabled: boolean;
}
export function MyButton({ title, disabled }: MyButtonProps){
    return(
        <button disabled={disabled}>{title}</button>
    )
}

export function Profile() {
    return(
        <div>
         <h1>{ user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: 190,
                }} />
                <h2>{'Qualifications'}</h2>
                {qualifications.map(function(data){ //this maps the qualification array in order to list out each item within the array
                    return(
                        <li>
                            {data.title}
                        </li>
                    )
                }
                )}
                <p/>
                <MyButton title="Pointless Button" disabled = {true} />
                <p/>
               <Form />
              </div>  
    )        
}
