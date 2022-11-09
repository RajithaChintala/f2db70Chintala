var umbrella = require('../models/umbrella');
// List of all Costumes
exports.umbrella_list = async function(req, res) {
    try{
    theumbrella = await umbrella.find();
    res.send(theumbrella);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// for a specific umbrella.
exports.umbrella_detail = function(req, res) {
res.send('NOT IMPLEMENTED: umbrella detail: ' + req.params.id);
};
// Handle umbrella delete form on DELETE.
exports.umbrella_delete = function(req, res) {
res.send('NOT IMPLEMENTED: umbrella delete DELETE ' + req.params.id);
};
// Handle umbrella update form on PUT.
exports.umbrella_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: umbrella update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.umbrella_view_all_Page = async function(req, res) {
    try{
    theumbrella = await umbrella.find();
    res.render('umbrella', { title: 'umbrella Search Results', results: theumbrella });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};

// Handle umbrella create on POST.
exports.umbrella_create_post = async function(req, res) {
    console.log(req.body)
    let document = new umbrella();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.umb_color = req.body.umb_color;
    document.umb_cost = req.body.umb_cost;
    document.umb_size = req.body.umb_size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };