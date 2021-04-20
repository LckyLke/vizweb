const router = require('express').Router()
let Chart = require('../models/chart.model')

router.route('/').get(async (req, res) => {
    try {
        const Charts = await Chart.find()
        console.log(Charts)
        res.status(200).json(Charts)
    } catch (error) {
        res.status(400).json(error)
    }
})
router.route('/:id').get(async (req, res) => {
    try {
        const IdChart = await Chart.findById(req.params.id)
        res.status(200).json(IdChart)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.route('/add').post(async (req, res) => {
    const body = req.body
    console.log(body)
    let newChart = new Chart(body)
    try {
        await newChart.save()
        res.status(200).json('Chart added!')
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
})

module.exports = router