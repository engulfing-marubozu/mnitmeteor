const {Counter} = require('../Models/index');

const to_save = {
 current_counter: 0
}
const item = new Counter({
    current_counter: 0
});
item.save();