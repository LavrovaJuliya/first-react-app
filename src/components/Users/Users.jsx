import React from "react";
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            { id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11DTZGHkLBYRPM6QR9nUyHkSM6k0HIpmJpw&usqp=CAU', followed: false, fullname: 'Dmitry', status: 'T am are boss', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT11DTZGHkLBYRPM6QR9nUyHkSM6k0HIpmJpw&usqp=CAU', followed: true, fullname: 'Jeck', status: 'I am a boss too', location: { city: 'Washington', country: 'USA' } },
            { id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHLaVs5lXqwrZDPXE0p0PgL8ZahqLyRRDLIQ&usqp=CAU', followed: true, fullname: 'Julia', status: 'T like a tea', location: { city: 'Kiev', country: 'Ukraine' } },
            { id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHLaVs5lXqwrZDPXE0p0PgL8ZahqLyRRDLIQ&usqp=CAU', followed: true, fullname: 'Mary', status: 'I am a teacher', location: { city: 'Moscow', country: 'Russia' } }
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} />
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>

}



export default Users;