import React from 'react';

const DesignPage = () => {
    return (
        <div>
            <div className="design-page-container" style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '1rem', textAlign: 'center' }}>
                    Welcome to Freelancer Task MarketPlace
                </h1>
                <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '2rem', textAlign: 'center', maxWidth: '600px' }}>
                    Manage your freelance tasks efficiently. Add, update, delete your tasks, and bid on others' tasks to grow your freelance career!
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', width: '100%', maxWidth: '900px' }}>
                    <div style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 4px 24px rgba(59,130,246,0.08)', padding: '2rem', flex: '1 1 250px', minWidth: '250px', maxWidth: '300px', textAlign: 'center' }}>
                        <img src="https://img.icons8.com/color/96/000000/add-task.png" alt="Add Task" style={{ marginBottom: '1rem' }} />
                        <h2 style={{ color: '#3b82f6', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Add Task</h2>
                        <p style={{ color: '#64748b', fontSize: '1rem' }}>Post new freelance tasks and attract top talent to get your work done.</p>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 4px 24px rgba(59,130,246,0.08)', padding: '2rem', flex: '1 1 250px', minWidth: '250px', maxWidth: '300px', textAlign: 'center' }}>
                        <img src="https://img.icons8.com/color/96/000000/edit-property.png" alt="Update Task" style={{ marginBottom: '1rem' }} />
                        <h2 style={{ color: '#3b82f6', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Update Task</h2>
                        <p style={{ color: '#64748b', fontSize: '1rem' }}>Edit your posted tasks to keep them up-to-date and relevant.</p>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 4px 24px rgba(59,130,246,0.08)', padding: '2rem', flex: '1 1 250px', minWidth: '250px', maxWidth: '300px', textAlign: 'center' }}>
                        <img src="https://img.icons8.com/color/96/000000/delete-forever.png" alt="Delete Task" style={{ marginBottom: '1rem' }} />
                        <h2 style={{ color: '#3b82f6', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Delete Task</h2>
                        <p style={{ color: '#64748b', fontSize: '1rem' }}>Remove tasks that are no longer needed with a single click.</p>
                    </div>
                    <div style={{ background: '#fff', borderRadius: '1rem', boxShadow: '0 4px 24px rgba(59,130,246,0.08)', padding: '2rem', flex: '1 1 250px', minWidth: '250px', maxWidth: '300px', textAlign: 'center' }}>
                        <img src="https://img.icons8.com/color/96/000000/auction.png" alt="Bid Task" style={{ marginBottom: '1rem' }} />
                        <h2 style={{ color: '#3b82f6', fontSize: '1.3rem', marginBottom: '0.5rem' }}>Bid on Tasks</h2>
                        <p style={{ color: '#64748b', fontSize: '1rem' }}>Browse available tasks and place your bids to win exciting projects.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignPage;