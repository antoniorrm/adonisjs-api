const { test, trait } = use('Test/Suite')("User");


trait('Test/ApiClient')

test('it should return User when User created', async ({ assert, client}) => {
  const response = await client
    .post('/users')
    .send({
      username: "Antonio1",
      email: "antoni1o@automacao.com",
      password: "1234564s",
      phone: "9999999991",
    })
    .end()
    // console.log(response);
    // response.assertStatus(200);
    assert.exists(response.body.email);
});
