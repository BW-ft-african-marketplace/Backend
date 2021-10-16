const items = [
{item_name:"Beans - Butter Lrg Lima",item_description:"Nulla justo.",item_price:"10.38"},
{item_name:"Chutney Sauce",item_description:"Proin eu mi. Nulla ac enim.",item_price:"38.27"},
{item_name:"Appetizer - Mango Chevre",item_description:"Nunc purus. Phasellus in felis.",item_price:"30.84"},
{item_name:"Cheese - Havarti, Roasted Garlic",item_description:"Ut tellus. Nulla ut erat id mauris vulputate elementum.",item_price:"8.59"},
{item_name:"Chef Hat 25cm",item_description:"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",item_price:"21.98"},
{item_name:"Chambord Royal",item_description:"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",item_price:"35.14"},
{item_name:"Bandage - Flexible Neon",item_description:"Phasellus id sapien in sapien iaculis congue.",item_price:"26.99"},
{item_name:"Dried Figs",item_description:"Vivamus in felis eu sapien cursus vestibulum.",item_price:"3.84"},
{item_name:"Chocolate - Unsweetened",item_description:"Morbi porttitor lorem id ligula.",item_price:"40.04"},
{item_name:"Bread - Frozen Basket Variety",item_description:"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",item_price:"23.98"},
{item_name:"Shrimp, Dried, Small / Lb",item_description:"Duis ac nibh.",item_price:"42.06"},
{item_name:"Campari",item_description:"Proin risus. Praesent lectus.",item_price:"16.74"},
{item_name:"Coffee - 10oz Cup 92961",item_description:"Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",item_price:"40.80"},
{item_name:"Fuji Apples",item_description:"Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",item_price:"21.39"},
{item_name:"Beef - Inside Round",item_description:"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",item_price:"7.78"},
{item_name:"Lotus Rootlets - Canned",item_description:"Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",item_price:"18.33"},
{item_name:"Rolled Oats",item_description:"Phasellus sit amet erat. Nulla tempus.",item_price:"16.30"},
{item_name:"Wine - White, Chardonnay",item_description:"Donec ut mauris eget massa tempor convallis.",item_price:"2.48"},
{item_name:"Mustard - Seed",item_description:"Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",item_price:"37.99"},
{item_name:"Wine - Pinot Grigio Collavini",item_description:"Quisque ut erat. Curabitur gravida nisi at nibh.",item_price:"23.22"},
{item_name:"Lettuce - Iceberg",item_description:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.",item_price:"17.23"},
{item_name:"Glass Clear 8 Oz",item_description:"Nunc purus.",item_price:"11.69"},
{item_name:"Celery",item_description:"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",item_price:"18.38"},
{item_name:"Salt - Rock, Course",item_description:"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",item_price:"10.07"},
{item_name:"Muffins - Assorted",item_description:"Quisque porta volutpat erat.",item_price:"14.22"},
{item_name:"Pasta - Tortellini, Fresh",item_description:"In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",item_price:"31.26"},
{item_name:"Cake - Box Window 10x10x2.5",item_description:"Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",item_price:"40.37"},
{item_name:"Coffee - Decaffeinato Coffee",item_description:"Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",item_price:"21.60"},
{item_name:"Milk - Condensed",item_description:"Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",item_price:"26.75"},
{item_name:"Soup - French Onion, Dry",item_description:"Integer a nibh. In quis justo.",item_price:"36.55"},
{item_name:"Chestnuts - Whole,canned",item_description:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",item_price:"3.24"},
{item_name:"Island Oasis - Wildberry",item_description:"Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",item_price:"36.57"},
{item_name:"Coffee - Beans, Whole",item_description:"Ut tellus. Nulla ut erat id mauris vulputate elementum.",item_price:"47.54"},
{item_name:"Napkin White - Starched",item_description:"Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",item_price:"26.26"},
{item_name:"Salt And Pepper Mix - Black",item_description:"Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",item_price:"49.51"},
{item_name:"Icecream - Dstk Strw Chseck",item_description:"Curabitur convallis.",item_price:"37.96"},
{item_name:"Extract - Almond",item_description:"Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",item_price:"5.85"},
{item_name:"Steel Wool",item_description:"Aliquam sit amet diam in magna bibendum imperdiet.",item_price:"48.88"},
{item_name:"Browning Caramel Glace",item_description:"Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",item_price:"38.00"},
{item_name:"Grapefruit - Pink",item_description:"In quis justo. Maecenas rhoncus aliquam lacus.",item_price:"3.99"},
{item_name:"Glycerine",item_description:"In congue.",item_price:"21.43"},
{item_name:"Caviar - Salmon",item_description:"Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",item_price:"48.82"},
{item_name:"Milkettes - 2%",item_description:"Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.",item_price:"31.28"},
{item_name:"Juice - Mango",item_description:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",item_price:"10.23"},
{item_name:"Plasticforkblack",item_description:"In eleifend quam a odio.",item_price:"38.01"},
{item_name:"Kellogs All Bran Bars",item_description:"Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",item_price:"32.60"},
{item_name:"Yogurt - Strawberry, 175 Gr",item_description:"Vestibulum sed magna at nunc commodo placerat.",item_price:"12.65"},
{item_name:"Wine - White, Riesling, Semi - Dry",item_description:"Aliquam non mauris. Morbi non lectus.",item_price:"45.02"},
]

exports.seed = function(knex) {
  return knex('items').insert(items)
};
