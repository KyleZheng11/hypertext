import Form from "next/form"

export default function Home() {
  return (
    <div>
      <h1>HyperText!</h1>
      <Form action={""} className="pinInput">
        <input name="pin" placeholder="PIN"/>
        <button type="submit">Enter</button>
      </Form>
    </div>
  );
}
