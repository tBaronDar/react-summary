import Modal from "../components/Modal";
import classes from "./NewPost.module.css";

import { Link, Form, redirect } from "react-router-dom";

function NewPost() {
  return (
    <Modal>
      <Form method="POST" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} name="body" />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required name="author" />
        </p>
        <p className={classes.actions}>
          <button>Submit</button>
          <Link type="button" to="..">
            Cancel
          </Link>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const data = await request.formData();
  const postData = Object.fromEntries(data);

  const response = await fetch("http://localhost:8080/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });

  return redirect("/");
}
