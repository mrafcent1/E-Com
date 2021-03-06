const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [{model: Product}]
  })
  .then(tagData => res.json(tagData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

router.get('/:id', (req, res) => {
  Tag.findAll({
    where: {id: req.params.id},
    include: [{model: Product}]
  })
  .then(tagData => res.json(tagData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then(tagData => res.json(tagData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {id: req.params.id}
  })
  .then(tagData => res.json(tagData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {id: req.params.id}
  })
  .then(tagData => res.json(tagData))
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
});

module.exports = router;
