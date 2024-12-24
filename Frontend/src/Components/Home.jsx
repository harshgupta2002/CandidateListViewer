import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import InfoTable from './InfoTable'


function Home() {

    const [candidateDets, setCandidateDets] = useState([]);
    const [filteredCandidates, setFilteredCandidates] = useState([]);

    useEffect(() => {

        const fetchCandidates = async () => {
            try {
                const response = await fetch('http://localhost:3001/api/candidates', {
                    method: 'GET'
                })
                if (!response.ok) {
                    const errRes = await response.json();
                    throw new Error(errRes.result);
                }

                const successRes = await response.json()
                if (!successRes.candidates || successRes.candidates.length === 0) {
                    console.log("No candidates found!");
                }

                setCandidateDets(successRes.candidates)
                setFilteredCandidates(successRes.candidates)
                // console.log(successRes.candidates);

            } catch (e) {
                console.log(e.message);

            }
        }
        fetchCandidates();

    }, [])
    useEffect(() => {
        console.log(candidateDets);

    }, [candidateDets])

    const handleSearch = (searchValue) => {
        if (!searchValue) {
            setFilteredCandidates(candidateDets);
            return;
        }

        const lowercasedValue = searchValue.toLowerCase();
        const filtered = candidateDets.filter((candidate) =>
            candidate.Name.toLowerCase().includes(lowercasedValue) ||
            candidate.Skills.some((skill) => skill.toLowerCase().includes(lowercasedValue))
        );

        setFilteredCandidates(filtered);
    };

    const handleSortByExperience = () => {
        const sorted = [...filteredCandidates].sort((a, b) => b.YearsOfExperience - a.YearsOfExperience);
        setFilteredCandidates(sorted);
    };

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className=' flex items-center flex-col p-4 backdrop-blur-sm bg-opacity-30 rounded-xl h-[90%] w-[80%] bg-white z-10'>
                <h1 className='text-center text-[#383780] p-2 text-2xl pt-6 font-bold'>Candidate List Viewer</h1>

                <div className='mt-4 w-[80%] flex flex-col justify-center items-center'>
                    <div className='w-full justify-center flex gap-3'>
                        <SearchBox
                            onSearch={handleSearch}
                        />
                        <button onClick={handleSortByExperience} className='p-2 bg-gray-100 px-6 rounded-md shadow-sm hover:bg-gray-200'>Sort by Experience</button>

                    </div>
                    <InfoTable
                        candidateDets={filteredCandidates}
                    />
                </div>
            </div>

        </div>
    )
}

export default Home