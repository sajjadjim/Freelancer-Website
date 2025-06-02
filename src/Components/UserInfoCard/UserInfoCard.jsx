import React, { use, useEffect } from "react";
import { AuthContext_File } from "../../Authcontext/AuthProvider";
import { User } from "lucide-react";
import { useState } from "react";

const UserInfoCard = () => {
    const { user } = use(AuthContext_File)

    const [dbUser, setDbUser] = useState([])
    // Filter Data From the Database From  userDatabase Information  Show the name
    useEffect(() => {
        fetch('https://frelancer-server.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                setDbUser(data);
            })
    }, []);

    const currentUser = dbUser.filter(db => db.email === user?.email)
    // console.log("Curreent Users ", currentUser)

    const displayName =
        user.displayName ||
        (currentUser.length > 0 && currentUser[0].name) ||
        "Unknown";

    return (
        <div className="md:min-h-screen  md:mt-30 md:-mb-100 my-10">
            <div className="max-w-md  mx-auto bg-white shadow-md rounded-2xl p-6 border border-gray-200">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">User Information</h2>
                <div className="space-y-3">
                    <div className="flex justify-center">
                        {user.photoURL ? (
                            <img
                                className="rounded-full my-5 shadow-2xl cursor-pointer w-24 h-24 object-cover"
                                src={user.photoURL}
                                alt="User"
                            />
                        ) : (
                            <div className="flex items-center justify-center my-5 w-24 h-24 rounded-full bg-gray-100 shadow-2xl">
                                <User size={48} className="text-gray-400" />
                            </div>
                        )}
                    </div>
                    <div>
                        <span className="text-gray-500 font-semibold">User ID: </span>
                        <span className="text-gray-700 font-bold">{user.uid}</span>
                    </div>
                    <div>
                        <span className="text-gray-500 font-semibold">Name: </span>
                        <span className="text-gray-700">{displayName}</span>
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
//     "uid": "HVVqJ3zxhROYtS7jtLK9KDoRQH63",
//     "email": "sajjadjim15@gmail.com",
//     "emailVerified": true,
//     "displayName": "Sajjad Hossain Jim",
//     "isAnonymous": false,
//     "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocK52z11nFUSb9DJN954OKoAaGZGIRJ85xb3ymsg_mm9rUVpedcnRQ=s96-c",
//     "providerData": [
//         {
//             "providerId": "google.com",
//             "uid": "117379099195794393040",
//             "displayName": "Sajjad Hossain Jim",
//             "email": "sajjadjim15@gmail.com",
//             "phoneNumber": null,
//             "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocK52z11nFUSb9DJN954OKoAaGZGIRJ85xb3ymsg_mm9rUVpedcnRQ=s96-c"
//         }
//     ],
//     "stsTokenManager": {
//         "refreshToken": "AMf-vByuk_ujEY-cPt9_9Cr7GW1gtrjZDVdDCGFe6X1WyrGpD__9Od7Da7q1JGEYBtOlY0kiGH5K_gP5EPd4a-m8efFMgWITI8S_LwCFEEABp7-oX1YTSo6AXj4KbrfLAIT6pdeOYxqXMUqTtR4szyNzX9UTMe2tiMRTQ51eusTd_3uLHDcAKNCmze36-GbNEuuZTeJMcZIUozXKjz5Zg2aHJXN4xAhXot4nVKZ4Ywch0R78BS811rfKHG9UjPvdaBSjElFxqddsvne0D-kzPFGY2BeKmA0UDGmJ6Pt-UMl4Yof3fPFk1Z2qVdemeOcYGc7l0H-xo6uC1FPLXK2XLnOreuutiR76mvgYiPlHcc6d48FlO20R-NUEcx-IoENhaxJkPekkaSrjv1VLAfJICQgHVssUxQ0aeTbX2XQAk_lgfQqVlqnQPtaUFBDaQGxZx5IkpFKBdwAp7hhsuuzO6q1zN0lnUsApl9J2xMziCyoQtuGKcTddAQs",
//         "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU2FqamFkIEhvc3NhaW4gSmltIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0s1MnoxMW5GVVNiOURKTjk1NE9Lb0FhR1pHSVJKODV4YjN5bXNnX21tOXJVVnBlZGNuUlE9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZnJlZWxhbmNlLXRhc2stbWFya2V0cGxhLTZkN2U3IiwiYXVkIjoiZnJlZWxhbmNlLXRhc2stbWFya2V0cGxhLTZkN2U3IiwiYXV0aF90aW1lIjoxNzQ4MDI0NTQ5LCJ1c2VyX2lkIjoiSFZWcUozenhoUk9ZdFM3anRMSzlLRG9SUUg2MyIsInN1YiI6IkhWVnFKM3p4aFJPWXRTN2p0TEs5S0RvUlFINjMiLCJpYXQiOjE3NDgwMjQ1NDksImV4cCI6MTc0ODAyODE0OSwiZW1haWwiOiJzYWpqYWRqaW0xNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExNzM3OTA5OTE5NTc5NDM5MzA0MCJdLCJlbWFpbCI6WyJzYWpqYWRqaW0xNUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.M6b9CN9RxRK9pCQh5fSPGU12AsfVcpxrWvn2LtMleLl_f6OSIl5exsCTmQE8AIRwcQgj4lKdlBOvmNjlCaYYX2TxF_98jTa5qfCeajbl7GZQGkjncM-ByhEGXYiYlGFCdrJR9jC15H-AvPSEBpiFM0KD0IXhwvU6Z3T8MBLHb33v33Bhcaj4dcLCyUdufvhr-HLk5Puq7BI9YdGH2i_YxWpfIni9U8yfZcxlGDejQ5owcJHsWSUfHmGztCUGgDWx2EKX286tkZltRwIL7YtPCSSAnVo0v_s8J9Ts59XyYC0bpBe4f8OadhAmI9l08Zn2ITs-vuCxNhQn1ZMyZ9h_5g",
//         "expirationTime": 1748028145924
//     },
//     "createdAt": "1747926977903",
//     "lastLoginAt": "1748024475435",
//     "apiKey": "AIzaSyDTGxXTB7UxvOCTuwx2bsS_f1aqXYHMggs",
//     "appName": "[DEFAULT]"
// }



// {
//     "uid": "VFRl3UORRRf1PoNOYKsqgzMjnw12",
//     "email": "salma@gmail.com",
//     "emailVerified": false,
//     "isAnonymous": false,
//     "providerData": [
//         {
//             "providerId": "password",
//             "uid": "salma@gmail.com",
//             "displayName": null,
//             "email": "salma@gmail.com",
//             "phoneNumber": null,
//             "photoURL": null
//         }
//     ],
//     "stsTokenManager": {
//         "refreshToken": "AMf-vBw9kfBtS_ayEl4x7_MhPskh35z-FMd-PVc0OX5Cq-QdA-4eKQwOwp0y9VIACeNL2Ph4fxnaH-SkIKru7VIaCUY2-sPW4ptqlAoSkC6QLevx1GejgTUy0w1wkCQnvaUlm1_xgM0fF7d_PeCTYRR7_g_FBr4MU503N1CC6Yw1mFqQz8mhPjTyQuA7HZpMDraxgWwkX5xQYNG-pK-c-n1aaKVmmdj9p6r7vrTIRHNiROEPm43uD2vk5-iwexo49U8nT1B8hcJH",
//         "accessToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3ZDhjZWU0ZTYwYmYwMzYxNmM1ODg4NTJiMjA5MTZkNjRjMzRmYmEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vZnJlZWxhbmNlLXRhc2stbWFya2V0cGxhLTZkN2U3IiwiYXVkIjoiZnJlZWxhbmNlLXRhc2stbWFya2V0cGxhLTZkN2U3IiwiYXV0aF90aW1lIjoxNzQ4MDI1Nzg3LCJ1c2VyX2lkIjoiVkZSbDNVT1JSUmYxUG9OT1lLc3Fnek1qbncxMiIsInN1YiI6IlZGUmwzVU9SUlJmMVBvTk9ZS3NxZ3pNam53MTIiLCJpYXQiOjE3NDgwMjU3ODcsImV4cCI6MTc0ODAyOTM4NywiZW1haWwiOiJzYWxtYUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsic2FsbWFAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.d0YZCFc1pHqLPJyYMQBI84nA3hAQdDniKzpgmeCmKN29VDlwxF5wSeygOXWRxBqPKuDTUDimeUMnVoVqh_ZQFglwCalfHZjZRWK_rXRSBar9dHfx_h5zMKQ-atMqQhhXC53gA8cJMaZ5xWJ_oTBwp-Yc7A1c5DGfJR_xKU3hDFQtvqZW_jx-8NSj0NYe2ZPBYkPZEaGaEGUQMyfEQ1klD4ooDRjRj1h_AHFjfRKHsaoIMRhIxSBqhhOl01s7upp5H-P2Yw0J5wNzmjvlH6mVb6MenPD1VNsF0uPIBCrXz0s_ionmAYRN-W_UWo-Ryqmnq0bE09kR7lBjxMu2gLk5Og",
//         "expirationTime": 1748029383828
//     },
//     "createdAt": "1747934584467",
//     "lastLoginAt": "1748025787254",
//     "apiKey": "AIzaSyDTGxXTB7UxvOCTuwx2bsS_f1aqXYHMggs",
//     "appName": "[DEFAULT]"
// }