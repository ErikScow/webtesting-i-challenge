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

    it('should decrease durability by 5', () => {
        const item = {
            name: 'some name',
            durability: 100,
            enhancement: 14,
        }

        const failed = {
            name: 'some name',
            durability: 95,
            enhancement: 14,
        }

        expect(enhancer.fail(item)).toEqual(failed)
    })

    it('should decrease durability by 10', () => {
        const item = {
            name: 'some name',
            durability: 100,
            enhancement: 16,
        }

        const failed = {
            name: 'some name',
            durability: 90,
            enhancement: 16,
        }

        expect(enhancer.fail(item)).toEqual(failed)
    })

    it('should decrease durability by 10 and enhancement by 1', () => {
        const item = {
            name: 'some name',
            durability: 100,
            enhancement: 17,
        }

        const failed = {
            name: 'some name',
            durability: 90,
            enhancement: 16,
        }

        expect(enhancer.fail(item)).toEqual(failed)
    })
})