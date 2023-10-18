import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BsFillArchiveFill, BsFillBellFill, BsFillGrid3X3GapFill, BsPeopleFill, BsJustify } from 'react-icons/bs';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

function Home() {
  const barChartData = [
    {
      name: 'Jan',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Feb',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Mar',
      uv: 2000,
      pv: 4800,
      amt: 2290,
    },
    {
      name: 'Apr',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'May',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'June',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'July',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: 'Aug',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Sep',
      uv: 2000,
      pv: 2000,
      amt: 2290,
    },
  ];

  const pieChartData = [
    { name: 'Group A', value: 200 },
    { name: 'Group B', value: 350 },
    { name: 'Group C', value: 450 },
  
  ];

  const COLORS = ['#0088FE', 'whitesmoke', 'purple'];

  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs };
  }

  const rows = [
    createData('Abstract 3d', '32 in stock', '💲45.99', 20),
    createData('Sarphens Illustrations', '32 in stock', '💲45.99', 20),



  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3 className='hthree'>Hello Shahrukh👋</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <BsFillGrid3X3GapFill className="card_icon" />
            <div>
              <h1>Earning</h1>
              <p>$198K</p>
              <p>⬆️27.8% hike this month</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner hthree">
            <BsFillGrid3X3GapFill className="card_icon" />
            <div>
              <h1>Orders</h1>
              <p>$2.4K</p>
              <p>⬇️2% down this month</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner hthree">
            <BsPeopleFill className="card_icon" />
            <div>
              <h1>Balance</h1>
              <p>$2.4K</p>
              <p>⬇️2% hike this month</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-inner hthree">
            <BsFillBellFill className="card_icon" />
            <div>
              <h1>Total sales</h1>
              <p>$89K</p>
              <p>⬆️11% hike this month</p>
            </div>
          </div>
        </div>
      </div>
      <div className="charts">
        <div className='charts-container'>
          <h2 className='head'>OverView</h2>
          <h5 className='head head1'>Monthly Income</h5>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              width={400}
              height={300}
              data={barChartData}
              margin={{
                top: 50,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={20}
            >
              <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className='charts-container'>
        <h2 className='head'>Customers</h2>
          <h5 className='head head1'>Customer that buy Products</h5>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart width={400} height={400}>
              <Pie
                data={pieChartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="product-sell">
        <div className="product-sell-header">
          <h3 className='hthree'>Product Sell</h3>
          <div className="product-sell-search">
            
            <input  type="text" placeholder="Search" />
            
            <button>Last three Days</button>
          </div>
        </div>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Stock</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Table Sales</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </main>
  );
}

export default Home;
