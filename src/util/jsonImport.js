import path from "path";

async function jsonImport(pathFile) {
  console.log(process.cwd());
  const json = await import(path.join(process.cwd(), pathFile), {
    assert: {
      type: "json",
    },
  });

  return json.default;
}

export default jsonImport;
