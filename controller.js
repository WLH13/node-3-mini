module.exports = {
    getPlanes: (req, res) => {
        const {count} = req.params;
        //get db
        const db = req.app.get('db');

        db.get_planes([+count]).then(planes => {
            res.status(200).send(planes)
        })
        .catch(err => res.status(500).send(err))
    }
};