package com.highradius.training;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.HashMap;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;


import com.google.gson.Gson;

/**
 * Servlet implementation class addData
 */
@WebServlet("/addData")
public class addData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public addData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		try {
			HashMap<Object,Object> Response = new HashMap<Object,Object>();
			String business_code = request.getParameter("business_code");
			String cust_number = request.getParameter("cust_number");
			String clear_date = request.getParameter("clear_date");
			String buisness_year = request.getParameter("buisness_year");
			String doc_id = request.getParameter("doc_id");
			String posting_date = request.getParameter("posting_date");
			String doc_create_date = request.getParameter("document_create_date");
			String due_in_date = request.getParameter("due_in_date");
			String invoice_currency = request.getParameter("invoice_currency");
			String Document_type = request.getParameter("Document_type");
			String posting_id = request.getParameter("posting_id");
			String total_open_amount = request.getParameter("total_open_amount");
			String baseline_create_date = request.getParameter("baseline_create_date");
			String cust_payment_terms = request.getParameter("cust_payment_terms");
			String invoice_id = request.getParameter("invoice_id");
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","stxavier");
			String sql = "INSERT INTO winter_internship (business_code,"
					+ "cust_number,"
					+ "clear_date,"
					+ "buisness_year,"
					+ "doc_id,"
					+ "posting_date,"
					+ "document_create_date,"
					+ "due_in_date,"
					+ "invoice_currency,"
					+ "Document_type,"
					+ "posting_id,"
					+ "total_open_amount,"
					+ "baseline_create_date,"
					+ "cust_payment_terms,"
					+ "invoice_id) "
					+ "VALUES "
					+ "(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
			PreparedStatement ps = con.prepareStatement(sql);
			ps.setString(1, business_code);
			ps.setString(2, cust_number);
			ps.setString(3, clear_date);
			ps.setString(4, buisness_year);
			ps.setString(5, doc_id);
			ps.setString(6, posting_date);
			ps.setString(7, doc_create_date);
			ps.setString(8, due_in_date);;
			ps.setString(9, invoice_currency);
			ps.setString(10, Document_type);
			ps.setString(11, posting_id);
			ps.setString(12, total_open_amount);
			ps.setString(13, baseline_create_date);
			ps.setString(14, cust_payment_terms);
			ps.setString(15, invoice_id);
			
			if(ps.executeUpdate()>0) {
				Response.put("insert",true);
			}else {
				Response.put("insert",false);
			}
			Gson gson = new Gson();
			String jsonResponse = gson.toJson(Response);
			
			response.getWriter().append(jsonResponse);
		}catch (Exception e) {
			e.printStackTrace();
		}
		response.setHeader("Access-Control-Allow-Origin", "*");
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}