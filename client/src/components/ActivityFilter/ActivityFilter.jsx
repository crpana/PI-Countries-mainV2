import React from "react";
import { filtroActividad, getActivity, getCountries, setPagina } from "../../redux/actions";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";


export default function ActivityFilter() {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getActivity())
    },[dispatch])
    const activitySave = useSelector((state) => state.activities);
    // const aaaa=useSelector(state=>state.countries)



    function handleFilterAct(e) {
        e.preventDefault()
        setPagina(1)
        dispatch(filtroActividad(e.target.value))
        // console.log(aaaa);
        console.log(e.target.value);
    }

    return (
        <div>
            <select onChange={(e) => handleFilterAct(e)}>
                <option value='All'>Select Activity</option>

                {
                    activitySave?.map(act => {
                        return (
                            <option key={act.id} value={act.name} >{act.name}</option>
                        );
                    })
                }

            </select>
        </div>
    );



}





