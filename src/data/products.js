export const categories = ['All','Electronics','Fashion','Home','Beauty','Sports']

export const products = [
  {id:1,name:'Wireless Headphones Pro',category:'Electronics',price:129.99,oldPrice:179.99,rating:4.6,reviews:234,stock:12,img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',desc:'Premium wireless headphones with active noise cancellation.'},
  {id:2,name:'Smart Watch Series X',category:'Electronics',price:249.00,oldPrice:299.00,rating:4.8,reviews:512,stock:8,img:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',desc:'Advanced smartwatch with health tracking.'},
  {id:3,name:'Minimalist Leather Jacket',category:'Fashion',price:189.50,oldPrice:null,rating:4.4,reviews:89,stock:5,img:'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400',desc:'Genuine leather jacket, slim fit.'},
  {id:4,name:'Ceramic Vase Set',category:'Home',price:45.00,oldPrice:60.00,rating:4.2,reviews:45,stock:20,img:'https://images.unsplash.com/photo-1578500475832-3f8f3c0d7f8e?w=400',desc:'Handcrafted ceramic vase set of 3.'},
  {id:5,name:'Vitamin C Serum',category:'Beauty',price:28.99,oldPrice:null,rating:4.7,reviews:320,stock:30,img:'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400',desc:'Brightening vitamin C serum.'},
  {id:6,name:'Yoga Mat Pro',category:'Sports',price:39.99,oldPrice:49.99,rating:4.5,reviews:120,stock:15,img:'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400',desc:'Non-slip yoga mat with alignment lines.'},
  {id:7,name:'Bluetooth Speaker',category:'Electronics',price:79.99,oldPrice:99.99,rating:4.3,reviews:200,stock:0,img:'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400',desc:'Portable waterproof speaker.'},
  {id:8,name:'Running Sneakers',category:'Sports',price:119.00,oldPrice:149.00,rating:4.6,reviews:410,stock:10,img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',desc:'Lightweight running shoes.'},
  {id:9,name:'Coffee Maker Deluxe',category:'Home',price:159.00,oldPrice:null,rating:4.1,reviews:67,stock:7,img:'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400',desc:'Programmable coffee maker.'},
  {id:10,name:'Linen Shirt',category:'Fashion',price:55.00,oldPrice:75.00,rating:4.0,reviews:55,stock:25,img:'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400',desc:'Breathable linen shirt.'},
  {id:11,name:'Lipstick Set',category:'Beauty',price:32.00,oldPrice:null,rating:4.8,reviews:280,stock:40,img:'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400',desc:'Matte lipstick set of 6.'},
  {id:12,name:'Smart TV 55"',category:'Electronics',price:499.00,oldPrice:599.00,rating:4.7,reviews:600,stock:3,img:'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400',desc:'4K UHD smart television.'},
]
export const getProduct = (id) => products.find(p=>p.id===Number(id))
export const related = (id) => products.filter(p=>p.id!==Number(id)).slice(0,4)
