import React, { use, useEffect } from "react";
import { AuthContext_File } from "../../Authcontext/AuthProvider";
import { User } from "lucide-react";
import { useState } from "react";

const UserInfoCard = () => {
    const { user } = use(AuthContext_File)
    const [userInfo, setUserInfo] = useState([])


    useEffect(() => {

        fetch(`https://frelancer-server.vercel.app/users?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data);
            });
    }, []);
    // console.log("Display Name:", Array.isArray(userInfo) ? userInfo[0]?.name : userInfo.name)
    // console.log(
    //     "Photo url",
    //     Array.isArray(userInfo) ? userInfo[0]?.photoUrl : userInfo?.photoUrl
    // )

    return (
        <div className="md:min-h-screen  md:mt-30 md:-mb-100 my-10">
            <div className="max-w-md  mx-auto bg-white shadow-md rounded-2xl p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">User Information</h2>
                <div className="space-y-3">
                    <div className="flex justify-center">
                        <img
                            className="rounded-full my-5 shadow-2xl cursor-pointer w-24 h-24 object-cover"
                            src={Array.isArray(userInfo) ? userInfo[0]?.photoUrl : userInfo?.photoUrl}
                            alt="User"
                        />
                    </div>
                    <div>
                        <span className="text-gray-500 font-semibold">User ID: </span>
                        <span className="text-gray-700 font-bold">{Array.isArray(userInfo) ? userInfo[0]?._id : userInfo._id}</span>
                    </div>
                    <div>
                        <span className="text-gray-500 font-semibold">Name: </span>
                        <span className="text-gray-700">{Array.isArray(userInfo) ? userInfo[0]?.name : userInfo.name}</span>
                    </div>
                    <div>
                        <span className="text-gray-500 font-semibold">Email: </span>
                        <span className="text-gray-700">{user.email}</span>
                    </div>
                    <div>
                        <span className="text-gray-500 font-semibold">Role: </span>
                        <span className="text-gray-700">Users</span>
                    </div>
                    <div>
                        <span className="text-gray-500 font-semibold">Location: </span>
                        <span className="text-gray-700">Bangladesh</span>
                    </div>
                    <div>
                        <span className="text-gray-500 font-semibold">Joined: </span>
                        <span className="text-gray-700">{user.metadata?.lastSignInTime || "N/A"}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfoCard;


// {
//     "_id": "685d78c04001f0896ae316cd",
//     "name": "Sajjad Hossain Jim",
//     "email": "sajjadjim15@gmail.com",
//     "photoUrl": "https://lh3.googleusercontent.com/a/ACg8ocK52z11nFUSb9DJN954OKoAaGZGIRJ85xb3ymsg_mm9rUVpedcnRQ=s96-c"
// }