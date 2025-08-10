import React, { useEffect } from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer';

export const Contact = () => {

    const {store, dispatch} = useGlobalReducer();

    const data = async ()=>{
        try{
            const response = await fetch('https://playground.4geeks.com/contact/agendas/danloveper/contacts');
            const data = await response.json();
            console.log(data);
            return data
        }catch(e){
            console.error('Error al obtener contactos: ', e)
        }
    }

    useEffect(()=>{
        data();
    },[])

    return (
        <div className="container">

            <div className="card mb-3 w-100">
                <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center">
                        <img src="https://picsum.photos/id/237/200/300" className="my-2 object-fit-cover rounded-circle" alt="..." style={{ width: "200px", height: "200px" }} />
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <p className="display-6">Mike Anamendolla</p>
                            <div className="card-text text-secondary" style={{ fontSize: '1.2rem' }}>
                                <p><i class="fa-solid fa-location-dot pe-2"></i> 5242 Hillcrest Rd</p>
                                <p><i class="fa-solid fa-phone pe-2"></i> (870) 288-4149</p>
                                <p><i class="fa-solid fa-envelope pe-2"></i> mike.anaexample</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4  d-flex align-items-center">
                        <div className="card-body display-5 d-flex justify-content-around">
                            <i class="fa-solid fa-pencil"></i>
                            <i class="fa-solid fa-trash-can"></i>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
