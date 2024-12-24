import React from 'react';

function InfoTable({ candidateDets }) {
    return (
        <div className="mt-8 overflow-auto lg:h-[20rem]">
            {candidateDets.length>0 ?<table style={{ borderSpacing: window.innerWidth <= 480 ? '5px' : '10px', borderCollapse: 'separate' }}>
                <thead>
                    <tr>
                        <th className="border bg-white border-[#383780] border-opacity-20 rounded-lg text-[#383780] shadow-[#383780] lg:px-12 py-2">Name</th>
                        <th className="border bg-white border-[#383780] border-opacity-20 rounded-lg text-[#383780] shadow-[#383780] lg:px-10 py-2">Skills</th>
                        <th className="border bg-white border-[#383780] border-opacity-20 rounded-lg text-[#383780] shadow-[#383780] lg:px-4 py-2">Years of Experience</th>
                    </tr>
                </thead>
                <tbody className='text-xs lg:text-base'>
                    {candidateDets.map((candidate, index) => (
                        <tr key={index}>
                            <td className="border text-center bg-white border-[#383780] border-opacity-20 rounded-lg text-[#383780] shadow-[#383780] lg:px-12 py-2">{candidate.Name}</td>
                            <td className="border text-center bg-white border-[#383780] border-opacity-20 rounded-lg text-[#383780] shadow-[#383780] lg:px-12 py-2">{candidate.Skills.join(', ')}</td>
                            <td className="border text-center bg-white border-[#383780] border-opacity-20 rounded-lg text-[#383780] shadow-[#383780] lg:px-12 py-2">{candidate.YearsOfExperience}</td>
                        </tr>
                    ))}
                </tbody>
            </table>:"No Candidate Found!"}
        </div>
    );
}

export default InfoTable;
