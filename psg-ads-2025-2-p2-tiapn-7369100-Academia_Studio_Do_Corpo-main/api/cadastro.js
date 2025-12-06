import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { nome, celular, idade, email, cpf, infoMedicas } = req.body;

  const { error } = await supabase
    .from("aluno")
    .insert([{ 
      nome,
      celular,
      idade,
      email,
      cpf,
      info_medicas: infoMedicas
    }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ message: "Cadastro realizado!" });
}
