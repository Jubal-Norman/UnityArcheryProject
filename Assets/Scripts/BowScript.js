#pragma strict

var arrow : Rigidbody;
var speed = 50.0;
var nocked = false;
var ammoCountRect : Rect = Rect(25,25,50,25);
var ammoCount : int = 10;

function Start () {
	Screen.showCursor = false;
	Screen.lockCursor = true;

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
	ammoCount = ammoCount - 1;
}

function OnGUI()
{
	GUI.Label(ammoCountRect, ammoCount.ToString(), "box");
}

function Update () {
	if(ammoCount > 0){
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
}