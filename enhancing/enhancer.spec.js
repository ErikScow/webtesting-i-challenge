const enhancer = require('./enhancer.js');
// test away

describe('tests on the enhancer', () => {

    it('should set durability to 100', () => {
        const item = {}

        const repaired = enhancer.repair(item)

        expect(repaired).toEqual({ ...item, durability: 100})
    })

    it('should increase enhancement level by 1', () => {
        const item = {
            name: 'some name',
            durability: 100,
            enhancement: 19,
        }

        const enhanced = {
            name: 'some name',
            durability: 100,
            enhancement: 20.
        }

        expect(enhancer.success(item)).toEqual(enhanced)
    })

    it('should not increase enhancement level over 20', () => {
        const item = {
            name: 'some name',
            durability: 100,
            enhancement: 20,
        }

        const enhanced = {
            name: 'some name',
            durability: 100,
            enhancement: 20.
        }

        expect(enhancer.success(item)).toEqual(enhanced)
    })
})