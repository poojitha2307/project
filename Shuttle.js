class Shuttle
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2			
			}
		
		this.radius=radius;
		this.image = loadImage("shuttle.jpg");
        this.x = x;
		this.y = y;
		this.body=Bodies.circle(this.x,this.y,(this.radius-20)/2, options);
        World.add(world, this.body);
        
	}
	display()
    {
			
			var shuttlepos=this.body.position;
			push()
			translate(shuttlepos.x, shuttlepos.y);
			rectMode(CENTER)
			//strokeWeight(6);
			fill(255,0,255);
			imageMode(CENTER);

			image(this.image,shuttlepos.x,shuttlepos.y,this.radius);
			pop()
			
	}

}