namespace WinFormsApp2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void label3_Click(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void button1_Click(object sender, EventArgs e)
        {
            long vn1 = long.Parse(txtnum1.Text);
            long vn2 = long.Parse(txtnum2.Text);
            long vresultado = 0;
            vresultado = vn1 + vn2;
            txtresultado.Text = Convert.ToString(vresultado);


        }

        private void textBox3_TextChanged(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            txtnum1.Clear();
            txtnum2.Clear();
            txtresultado.Text = "";

        }

        private void button4_Click(object sender, EventArgs e)
        {
            float v1 = float.Parse(txt1.Text);
            float v2 = float.Parse(txt2.Text);
            float vresul = 0;
            vresul = v1 + v2;
            txtresul.Text = Convert.ToString(vresul);
        }

        private void button3_Click(object sender, EventArgs e)
        {
            txt1.Clear();
            txt2.Clear();
            txtresul.Text = "";
        }
    }
}