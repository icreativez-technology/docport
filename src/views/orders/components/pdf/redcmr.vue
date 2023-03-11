<template>
<div id="cmrContent">
<table width="100%"  class="table cmr-data">
        <tr colspan="3" height="20px"   valign="top">
            <th widht="80%" style="border-top: none !important;"><strong style="font-size: 30px;">1</strong><span style="font-size: 10px; font-weight:bolder;"> Exemplaire de expéditeur <br />&nbsp;&nbsp;&nbsp;&nbsp;Copy for sander</span>   
            </th>
            <th widht="80%" style="top:50px;font-size: 10px; font-weight:bolder;border-top: none !important;">LETTRE DE VOITURE INTERNATIONALE 
            </th>
            <th class="text-center" widht="80%"  style="border-top: none !important;"><strong id="cmr-logo">CMR</strong>
            </th>
            <th widht="80%" style="top:50px;font-size: 10px; font-weight:bolder;border-top: none !important;">INTERNATIONAL CONSIGNMENT NOTE
            </th>
            <th width="10%" style="top:50px;font-size: 10px; font-weight:bolder;border-top: none !important;">Pays/Country</th>
            <th width="10%" style="top:50px;font-size: 10px; font-weight:bolder;border-top: none !important;">No 24382</th>
        </tr>
 </table>
 <table border=1 width="100%" align="center" class="table cmr-data">
    <tr height="60px"  valign="top">
            <!-- 1st Row -->
            <th>
                1. Expediteur (nom, adresse, pays) <br>
                     Sender (name, address, country)<br>
                     <span class="cmr-content">{{ cmr.cmrPDFVersion.SenderInfo  }}</span>
            </th>

            <th>
                6. Transporteur (nom, adresse, pays, autres références) <br>
                 Carrier (name, address, country, other references)<br>
                 <span class="cmr-content">{{ cmr.cmrPDFVersion.CarrierInfo }}</span>
            </th>
    </tr>
        <!-- 2nd Row -->
        <tr height="60px">
            <th valign="top">
                2. Destinataire (nom, adresse, pays) <br>
                Consignee (name, address, country)<br>
                <span class="cmr-content">{{ cmr.cmrPDFVersion.ConsigneeInfo }}</span>
            </th>
            <th>
                7. Transporteurs successifs / Successive carriers <br>
                Nom/Name : <span class="cmr-content">{{ cmr.cmrPDFVersion.SuccessiveCarrirerInfo }}</span><br>
                Adresse / Address : <span class="cmr-content">{{ cmr.cmrPDFVersion.SuccessiveCarrirerInfo }}</span><br> 
                Pays / Country : <span class="cmr-content">{{ cmr.cmrPDFVersion.SuccessiveCarrirerInfo }}</span><br>
                Reçu et acceptation : <span class="cmr-content">{{ cmr.cmrPDFVersion.SuccessiveCarrirerInfo }}</span><br>
                Receipt and Acceptance : <span class="cmr-content">{{ cmr.cmrPDFVersion.SuccessiveCarrirerInfo }}</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   Date : &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;     Signature : 
            </th>
        </tr>
        <!-- 3nd Row -->
        <tr height="80px" rowsan="2">
            <td width="50%">
                <table  width="100%"  >
                        <tr height="30px">
                            <th style="border-top: none !important;">
                                3. Prise en charge de la marchandise/Taking over the goods <br>
                                Lieu / Place : <span class="cmr-content">{{ cmr.cmrPDFVersion.PlaceOfTackingOfGoods }}</span><br>
                                Pays/Country : <span class="cmr-content">{{ cmr.cmrPDFVersion.PlaceOfTackingOfGoods }}</span><br>
                                Date <br>
                                Heure d'arrivée / Time of arrival :  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Heure de départ/Time of departure :
                            </th>
                        </tr>
                        <tr height="30px">
                            <th>
                                4. Livraison de la marchandise / Delivery of the goods <br>
                                Lieu / Place : <span class="cmr-content">{{ cmr.cmrPDFVersion.PlaceOfDeliveyOfGoods }}</span><br> 
                                Pays/Country : <span class="cmr-content">{{ cmr.cmrPDFVersion.PlaceOfDeliveyOfGoods }}</span><br>
                                Heures d'ouverture du dépôt / Warehouse opening hours
                            </th>
                        </tr>
                </table>
            </td>  
            <th valign="top" >8. 8 Réserves et observations du transporteur lors de la prise en charge de la marchandise Carrier's reservations and observations on taking over the goods</th>
        </tr>
        <!-- 4th Row -->
        <tr height="70px">
            <th>5. Instruction de expéditeur <br /> Sender's Instruction : <span class="cmr-content">{{ cmr.cmrPDFVersion.SendersInstruction }}</span></th>
            <th>9. Documents reinis au transporteur par exper <br >Documents handed to the carrierr by the sender</th>
        </tr>
        <!-- 5th Row -->
        <tr height="70px">
            <td colspan="3">
                <table border="1" width="100%" >
                        <tr colspan="3" height="120px" valign="top">
                            <th widht="80%">10. Marques et numéros <br> Marks and Nos  <br><span class="cmr-content">{{ cmr.cmrPDFVersion.MarksNr }}</span>
                            </th>
                            <th widht="80%">11. Marques et numéros <br> Number Of Packages  <br> <span class="cmr-content">{{ cmr.cmrPDFVersion.NrOfPages }}</span>
                            </th>
                            <th widht="80%">12. Marques et numéros <br> Method Of Packing   <br><span class="cmr-content">{{ cmr.cmrPDFVersion.MethodsOfPacking }}</span>
                            </th>
                            <th widht="80%">13. Marques et numéros <br> Nature Of Goods   <br><span class="cmr-content">{{ cmr.cmrPDFVersion.NatureOfGoods }}</span>
                            </th>
                            <th width="15%">14. Poids brut, kg <br> Gross weight in kg   <br><span class="cmr-content">{{ cmr.cmrPDFVersion.GrossWeightKg }}</span></th>
                            <th width="15%">15.  Cubage m3 <br> Volume in m3   <br><span class="cmr-content">{{ cmr.cmrPDFVersion.VolEurIdmM3 }}</span></th>
                        </tr>
                </table>
            </td>
        </tr>
         <!-- 6th Row -->
        <tr height="70px">
                <th>16. Special agreements between the sender and the carrier</th>
                <td>
                    <table border="1" width="100%" >
                        <tr>
                            <th>17. A payer par To be paid by:</th>
                            <th>Expéditeur Sender</th>
                            <th>Destinataire Consignee</th>
                        </tr>
                        <tr>
                            <th>Prix de transport Carriage charges</th>
                            <th><span class="cmr-content">{{ cmr.cmrPDFVersion.CarriageCharges }}</span></th>
                            <th><span class="cmr-content">{{ cmr.cmrPDFVersion.CarriageConsignee }}</span></th>
                        </tr>
                        <tr>
                            <th>Frais accessoires / Supplementary charges</th>
                            <th><span class="cmr-content">{{ cmr.cmrPDFVersion.SupplierCharges }}</span></th>
                            <th><span class="cmr-content">{{ cmr.cmrPDFVersion.SupplierConsignee }}</span></th>
                        </tr>
                        <tr>
                            <th>roits de douane / Customs duties</th>
                            <th><span class="cmr-content">{{ cmr.cmrPDFVersion.DeductionCharges }}</span></th>
                            <th><span class="cmr-content">{{ cmr.cmrPDFVersion.DeductionConsignee }}</span></th>
                        </tr>
                        <tr>
                            <th>Autre frais/ Other charges</th>
                            <th><span class="cmr-content">{{ cmr.cmrPDFVersion.OtherCharges }}</span></th>
                            <th><span class="cmr-content">{{ cmr.cmrPDFVersion.OtherConsignee }}</span></th>
                        </tr>
                    </table>
                </td>
        </tr>
         <!-- 7th Row -->
        <tr >
                <th>18. Autros indications utis <br> Other useful particulars</th>
                <th>19. Remboursement <br> Cash on delivery</th>
        </tr>
         <!-- 8th Row -->
        <tr>
        <th colspan="2">20. Ce transport est soumis, nonobstant toute clause contraire, à la Convention relative au contrat de transport international de marchandises par route (CMR) This carriage is subject, notwithstanding any clause to the contrary, to the Convention on the Contract for the international Carriage of Goods by Road (CMR)</th>
        </tr>
         <!-- 9th Row -->
            <tr>
                <td>
                    <table border="1" width="100%" >
                        <tr>
                            <th colspan="2">21 Etable a/Established in <center><strong>le / on</strong>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong style="text-align:right;"> 20..</strong></center></th>
                        </tr>
                        <tr height="70px">
                            <th>22 Signature or stump of the sender</th>
                            <th>23 Signature or stump of the carrier</th>
                        </tr>
                    </table>
                </td>
                <td>
                    <table width="100%" >
                        <tr>
                            <th style="border-top: none !important;">24 Goods Recived<br><br>
                              Time Of arrival:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Time Of departure: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <br><br> Place : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; On  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 20..<br><br>
                              Signature or stump of the carrier
                            </th>
                        </tr>
                    </table>
                </td>
            
            </tr>
            <tr height="60px">
           <th colspan="2">Non-contractual part reserved for the carrier</th>
        </tr>
</table>
</div>
</template>
<script>
import cmr from '../../../../store/states';
export default {
    setup() {
        return{
            cmr
        }
    }
}
</script>