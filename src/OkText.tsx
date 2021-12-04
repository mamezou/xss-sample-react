export const OkText = () => {
  const script = `<script>alert("XSS!")</script>`
  const tag = `<div>DIV!</div>`

  return (
    <div>
      {script}
      <br />
      {tag}
    </div>
  )
}
