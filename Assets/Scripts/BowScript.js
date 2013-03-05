#pragma strict

var arrow : Rigidbody;
var speed = 50.0;
var nocked = false;

function Start () {

}
var arrowClone : Rigidbody;
function NockArrow () {
	arrowClone = Instantiate(arrow, transform.position, transform.rotation);
	arrowClone.useGravity = false;
	nocked = true;
}

function FireArrow () {
	arrowClone.useGravity = true;
	arrowClone.velocity = transform.TransformDirection(Vector3.forward * speed);
	arrowClone.GetComponent(ArrowScript).Fired();
	nocked = false;
}

function Update () {
	if(nocked == true) {
		arrowClone.position = transform.position;
		arrowClone.rotation = transform.rotation;
	}
	if(Input.GetButtonDown("Fire1")) {
		NockArrow();
	}
	if(Input.GetButtonUp("Fire1")) {
		FireArrow();
	}
}