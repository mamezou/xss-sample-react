export const NgText = () => {
  const script = `<script>alert("XSS!")</script>`
  const tag = `<div>DIV!</div>`
  const form = `<>
      <form action="http://api.example.com/change_password" method="POST">
        <input type="hidden" name="password" value="hack" />
        <input type="submit" value="おして" />
      </form>
      </>`
  const iframe = `<iframe src="https://ja.reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml" width="1080px" height="800px"></iframe>`
  // eslint-disable-next-line no-script-url
  const alert = `javascript: alert('危険です')`

  return (
    <>
      <p>scriptはデフォルトで動作しません（innerHTML : ESの仕様）</p>
      <div dangerouslySetInnerHTML={{ __html: script }} />
      <div dangerouslySetInnerHTML={{ __html: tag }} />
      <div dangerouslySetInnerHTML={{ __html: form }} />
      <a href={`${alert}/edit`}>ここを押すと</a>
      <div dangerouslySetInnerHTML={{ __html: iframe }} />
    </>
  )
}
