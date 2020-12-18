const { Router, json } = require('express');
const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const members = require('../../Members');

// Get all members
router.get('/', (req, res) => {
  res.json(members);
});

// get single member
router.get('/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    res.json(members.filter((member) => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `member not found : ${req.params.id}` });
  }
});

// Create Member
router.post('/', (req, res) => {
  console.log('got data');
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
  };

  if (!newMember.name) {
    return res.status(400).json({ msg: 'Please include a name ' });
  }

  members.push(newMember);

  res.json(members);
});

// Update members
router.put('/:id', (req, res) => {
  const found = members.some((member) => member.id === parseInt(req.params.id));

  if (found) {
    const upMember = req.body;
    members.forEach((member) => {
      if (member.id === parseInt(req.params.id)) {
        member.name = upMember.name ? upMember.name : member.name;
        res.json({ msg: ' member update', member });
      }
    });
  } else {
    res.status(400).json({ msg: `member not found : ${req.params.id}` });
  }
});

module.exports = router;
