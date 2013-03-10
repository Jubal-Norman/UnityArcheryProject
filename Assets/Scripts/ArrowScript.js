#pragma strict

var fired = false;

function Start () {
}

function Fired() {
	fired = true;
    yield WaitForSeconds(3);
    Destroy (gameObject, 5);
}

function OnCollisionEnter(collision : Collision){
	rigidbody.constraints = RigidbodyConstraints.FreezeAll;
	fired = false;
}

function OnCollisionExit(collision : Collision){
	rigidbody.constraints = RigidbodyConstraints.None;
	
}

function Update () {
	if(fired == true) {
		var rot: Quaternion = transform.rotation;
		rot.SetLookRotation (rigidbody.velocity);
		transform.rotation = rot;
	}
}