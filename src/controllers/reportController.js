const reportService = require("../services/reportService");
const userService = require("../services/usuarioService");


async function createReport(req, res) {
  try {
    const { id } = req.params;
    const { title, content, adress } = req.body;
    
    let report = await reportService.createReport(title, content, adress, id);

    return res.json({
      success: true,
      data: report,
      message: "Report created successfully",
    });
  } catch (error) {
    return res.json({ error });
  }
}

async function findReportById(req,res){
  try{
    const { id } = req.params;

    const report =  await reportService.findReportById(id);

    if (!report) {
      return res.json({
        success: false,
        data: { report },
        message: "Could not find this report",
      });
    }

    return res.json({
      success: true,
      data: report,
      message: "report found successfully",
    });
  }catch(error){
    return res.json({ error });
  }
}

async function findAllReports(req, res) {
  try {
    const reports = await reportService.findAllReport();
    return res.json({
      success: true,
      data: reports,
      message: "Reports found successfully",
    });
  } catch (error) {
    return res.json({ error });
  }
}

async function UpdateReport(req,res){
  try{
    const { id } = req.params;

    const report =  await reportService.findReportById(id);

    if (!report) {
      return res.json({
        success: false,
        data: { report },
        message: "The update is not yet available",
      });
    }
  }catch(error){
    return res.json({ error });
  }
}

async function deleteReport(req, res) {
  try {
    const { id } = req.params;

    const report = await reportService.findReportById(id);
    if (!report) {
      return res.json({
        success: false,
        data: { id },
        message: "Could not find this report",
      });
    }

    await reportService.deleteReportById(id);
    return res.json({
      success: true,
      data: { id },
      message: "Report deleted successfully",
    });
  } catch (error) {
    return res.json({ error });
  }
}

module.exports = {
  createReport,
  findReportById,
  findAllReports,
  UpdateReport,
  deleteReport

};
