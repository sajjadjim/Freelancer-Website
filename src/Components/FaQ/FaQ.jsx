import React from 'react';

const FaQ = () => {
    return (
        <div className="w-full px-2 sm:px-4 md:px-8 max-w-2xl mx-auto md:my-10">
            <h1 className='md:text-3xl text-xl text-center font-bold md:my-5 my-2'>Frequently ask Question</h1>
            <div className="join join-vertical bg-base-100 w-full">
                <div className="collapse collapse-arrow join-item border-base-300 border w-full">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title font-semibold">How do I create an account?</div>
                    <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border w-full">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                    <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border w-full">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">How do I update my profile information?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border w-full">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">How do I add a new task here?</div>
                    <div className="collapse-content text-sm">Go to "Add Task" and then fill up the infomation and that store to the database.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border w-full">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">How can I see my onw create task?</div>
                    <div className="collapse-content text-sm">Go to "My browser task" and see here all the task and you can edit your task and delete your task and you can show your Bids number also.</div>
                </div>
                {/* Added Question 3.1 */}
                <div className="collapse collapse-arrow join-item border-base-300 border w-full">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">How do I contact customer support?</div>
                    <div className="collapse-content text-sm">You can contact customer support by clicking on the "Support" link in the footer and submitting your query.</div>
                </div>
                {/* Added Question 3.2 */}
                <div className="collapse collapse-arrow join-item border-base-300 border w-full">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">Can I change my email address?</div>
                    <div className="collapse-content text-sm">Yes, go to "Account Settings" and update your email address. You may need to verify the new email.</div>
                </div>
                {/* Added Question 3.3 */}
                <div className="collapse collapse-arrow join-item border-base-300 border w-full">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">Is my personal information secure?</div>
                    <div className="collapse-content text-sm">Yes, we use industry-standard security measures to protect your data.</div>
                </div>
            </div>
        </div>
    );
};

export default FaQ;