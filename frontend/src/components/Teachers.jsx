import { useEffect, useState } from "react";
import { useAuth } from "../contexts/authcontext";
import { teacherService } from "../services/teacherService";

export const Teachers = () => {

    const [teachers,setTeachers] = useState([]);
    const [isloading,setIsloading] = useState(true);
    const [error,setError] = useState(null);


    const fetchTeachers = async () => {

        try {
            const data = await teacherService.getTeachers();
            console.log("API Data: ",data)
            setTeachers(data.reverse());
        } catch (error) {
            setError('Failed to load data' + error)

            
        } finally{
            setIsloading(false);
        }
    
    }

    useEffect( () => {
        fetchTeachers();
    },[])


    const handleAddteacher = async (e) => {
        e.preventDefault();

        const formdata = new FormData(e.target);
        const data = Object.fromEntries(formdata);

        try {
            await teacherService.addTeachers(data);
            e.target.reset();
            await fetchTeachers();
        } catch (error) {
            alert('Could not add teacher.' + error);
            
        };
    };
    
    return (
        <div className="max-w-6x1 mx-auto px-4 py-10 font-sans text-gray-800">

            <h1 className="text-center mb-10 text-3xl font-bold text-gray-700">
                Teachers Directory
            </h1>

            <div className="bg-white p-8 rounded-xl shadow-lg mb-10 border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-600 mb-6">
                    Add New Instructor
                </h3>

                <form onSubmit={handleAddteacher} className="grid grid-cols-1 md:grid-cols-4 gap-4" aria-label="Add new instructor">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="teacher-name" className="text-sm font-medium text-gray-600">Name</label>
                        <input id="teacher-name" type="text" name="name" placeholder="Instructor Name" aria-required="true" required className="w-full p-3 border border-gray-200 rounded-lg  
                    focus:outline-none focus:ring-2 focus:ring-blue-400  transition"/>
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="teacher-subject" className="text-sm font-medium text-gray-600">Subject / Expertise</label>
                        <input
                            id="teacher-subject"
                            name="subject"
                            placeholder="Subject / Expertise"
                            aria-required="true"
                            required
                            className="w-full p-3 border border-gray-200 rounded-lg 
                                       focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="teacher-email" className="text-sm font-medium text-gray-600">Email</label>
                        <input id="teacher-email" type="email" name="email" placeholder="instructor@example.com" aria-required="true" required className="w-full p-3 border border-gray-200 rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
                    </div>

                    <button type="submit" className="w-full p-3 bg-blue-500 text-white rounded-lg font-semibold
                    hover:bg-blue-600 active:scale-95 transition transform self-end">
                        + Add Instructor
                    </button>

                </form>
            </div>

            {error && (
                <div role="alert" aria-live="assertive" className="bg-red-50 text-red-600 p-4 rounded-lg text-center border border-red-100"> 
                {error}
                </div>

            )}

            { isloading ?(
                <div role="status" aria-live="polite" className="text-center py-10 text-gray-500 text-lg animate-pulse">
                    Loading teachers data...
                </div>
            ): (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teachers.length > 0 ? (
                        teachers.map(
                            (teacher) => (
                                <div key={teacher.id} className="bg-white p-6 shadow-md border border-gray-50 hover:-translate-y-1 hover:shadow-xl transition duration-300 flex flex-col gap-3">
                                    <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold self-start">
                                        Active Faculty
                                    </span >
                                    <h3 className="text-xl font-bold text-gray-800 m-0">
                                        {teacher.name}
                                    </h3>
                                    <div>
                                        <span className="text-xl font-bold text-gray-400 uppercase tracking-wider block">
                                        Subject
                                        </span>
                                        <div className="text-sm text-gray-600 font-medium">
                                        {teacher.subject || 'Not Assigned'}
                                        </div>
                                    </div>

                                    <div>
                                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block"> Contact </span>
                                        <div className="text-sm text-gray-600 font-medium">
                                        {teacher.email || 'No Email'}
                                        </div>
                                    </div>
                                </div>
                        )
                        )
                    ) : (
                        <p className="text-center col-span-full text-gray-400 text-lg">
                            No teachers found in the system
                        </p>
                    )
                    }
                </div>
            )

            }
        
        </div>
    );

};

export default Teachers;