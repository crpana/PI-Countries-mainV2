const axios = require('axios');
const e = require('express');
const { Router } = require('express');
const { Country, Activity } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const router = Router();




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () => {

    let dbCheck = await Country.findAll();

    if (!dbCheck.length) {
        try {
            const apiURL = await axios.get('https://restcountries.com/v3.1/all');
            const apiInfo = apiURL.data.map(pais => {
                return {
                    name: pais.name.common,
                    id: pais.cca3,
                    capital: pais.capital != null ? pais.capital[0] : 'No tiene capital',
                    subregion: pais.subregion != null ? pais.subregion : 'No tiene subregion',
                    area: pais.area != null ? pais.area : 'No se conoce este dato',
                    population: pais.population != null ? pais.area : 'No se conoce este dato',
                    continent: pais.continents[0],
                    flag: pais.flags.png,
                };
            });

            apiInfo.forEach(e => {       //force : false para que lo haga una sola vez
                Country.findOrCreate({
                    where: {
                        name: e.name,
                        id: e.id,
                        capital: e.capital,
                        subregion: e.subregion,
                        area: e.area,
                        population: e.population,
                        continent: e.continent,
                        flag: e.flag,

                    }
                })

            });
            return apiInfo
        } catch (error) {
            console.log(error);
        }

    } else {
        return dbCheck;
    }


};



const getDbInfo = async () => {
    return await Country.findAll({
        include: {
            model: Activity,
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: {
                attributes: [],
            }

        }
    });

};



//GET son dos rutas en una /countries y /countries?name='..'
router.get('/countries', async (req, res) => {
    let { queryName } = req.query;
    const allCountry = await getApiInfo();

    if (queryName) {
        //obtener los paises que coincidan con el nombre pasado como query
        //si no coincide ninguno mostrar error
        let paises = await allCountry.filter(p => p.name.toLowerCase() === queryName.toLowerCase());

        if (paises.length > 0) {
            return res.status(200).json(paises);
        } else {
            return res.status(404).json('No se encontro pais.');
        }
    } else {
        return res.status(200).json(allCountry);
    }

    // return res.status(200).send(allCountry);

})



// router.get('/prueba', async (req, res) => {
//     let country = await getApiInfo();
//     console.log(country);
//     return res.status(200).json(country);
// })




//get /countries/{idPais}
router.get('/countries/:id', async (req, res) => {
    // Obtener el detalle de un país en particular
    // Debe traer solo los datos pedidos en la ruta de detalle de país
    // Incluir los datos de las actividades turísticas correspondientes
    let { id } = req.params;
    // let allCountry = await getApiInfo();
    // if (id) {
    //     let countryId = await allCountry.filter(e => e.id.toUpperCase() === id.toUpperCase());
    //     if (countryId.length > 0) {
    //         return res.status(200).json(countryId)
    //     } else {
    //         return res.status(404).send('No se pudo encontrar el pais.')
    //     }
    // }
    try {
        const pais = await Country.findByPk(id.toUpperCase(), {
            include: {
                model: Activity,
            }
        })
        pais !== null ?
            res.status(200).json(pais) :
            res.status(404).json('No se pudo encontrar el pais.')

    } catch (error) {
        console.log(error);
    }


})


//POST /activities

router.post('/activities', async (req, res) => {
    // Recibe los datos recolectados desde el formulario controlado de la ruta de creación de actividad turística por body
    // Crea una actividad turística en la base de datos, relacionada con los países correspondientes
    let { countries, name, difficulty, duration, season } = req.body;

    try {
        let countriesDb=await Country.findAll({
            where:{
                name:countries,
            }
        });

        let nuevaActividad = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        });

        nuevaActividad.addCountries(countriesDb)
        return res.status(200).json('Se creo la actividad.');


    } catch (error) {
        console.log(error)
    }


});




module.exports = router;
