import React, { use, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext_File } from "../../Authcontext/AuthProvider";

const ReviewForm = () => {

    useEffect(() => {
        document.title = "Rate us";
    })

    const { user } = use(AuthContext_File);

    // New review Add here code 
    const handleReviewAdd = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const reviwData = Object.fromEntries(formData.entries());

        // Include dynamic user info in task data
        // reviwData.username = user.username

        fetch('https://frelancer-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviwData),
        })
            .then(res => res.json()
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Review Done successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });

                    }
                })
            );
        form.reset();
    };


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
    const displayName =
        user.displayName ||
        (currentUser.length > 0 && currentUser[0].name) ||
        "Unknown";


    return (
        <div className="max-w-lg mx-auto p-6  shadow-md rounded-2xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 ">Submit Your Review</h2>
            <form onSubmit={handleReviewAdd} className="space-y-4">
                <div>
                    <label className="block text-sm font-semibold ">Name</label>
                    <input
                        type="text"
                        name='username'
                        className="input w-full text-black bg-gray-100"
                        value={displayName}
                        readOnly
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold ">Review</label>
                    <textarea
                        name="review"
                        required
                        rows={4}
                        className="w-full mt-1 p-2 border rounded-md"
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-semibold ">Rating</label>
                    <select
                        name="rating"
                        className="mt-1 p-2 border rounded-md w-full"
                    >
                        {[5, 4, 3, 2, 1].map((r) => (
                            <option key={r} value={r}>
                                {r} Star{r > 1 && "s"}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default ReviewForm;
