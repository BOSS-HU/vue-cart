module.exports = {
    devServer: {
        before(app) {
            app.get('/api/goods', (req, res) => {
                res.json({
                    code: 0,
                    list: [
                        { name: "全栈架构师", price: 1000, id: 1 },
                        { name: "Python", price: 2000, id: 2 } 
                    ]
                })
            })
        }
    }
}