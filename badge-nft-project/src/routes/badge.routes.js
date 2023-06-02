const { Router } = require('express');
const { badgeController } = require('../controllers/badge.controller');

const badgeRouter = Router();

badgeRouter.use(
    '/badge',
    badgeRouter.get('/all', badgeController.getAllBadges),
    badgeRouter.get('/:id', badgeController.getBadge),
    badgeRouter.post('/', badgeController.createBadge),
    badgeRouter.put('/:id', badgeController.updateBadge),
    badgeRouter.delete('/:id', badgeController.deleteBadge),
    badgeRouter.get('/owner/:badgeId', badgeController.getBadgeOwner),
    badgeRouter.post('/badge/baseUrl', badgeController.setBaseUrl)
);

module.exports = {
    badgeRouter
}