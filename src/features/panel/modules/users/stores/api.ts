import axios from 'axios'

export async function getUsers() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    return response.data.map((user: any) => ({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      type: 'admin', // Defina o tipo de usuário conforme necessário
    }))
  } catch (error) {
    console.error('Erro ao buscar usuários:', error)
    return []
  }
}
